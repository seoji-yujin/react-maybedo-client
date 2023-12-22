import React, { useCallback, useRef, useState } from 'react';
import {
  Container,
  TitleDiv,
  CreateForm,
  Button,
  NameTagWrapper,
  NameTagDiv,
  ProfileInputWrapper,
  ProfileInputButton,
  ProfileImage,
} from './style';
import useInput from 'hooks/useInput';
import { isEmpty } from 'lodash';
import useRequest from 'hooks/useRequest';
import { createGroup } from 'apis/group';
import { useNavigate } from 'react-router-dom';
import FormItem from 'components/FormItem';
import { toast } from 'react-toastify';
import { CiCamera } from 'react-icons/ci';
import { IoChevronBack } from 'react-icons/io5';

/**
 * 그룹 생성 페이지
 */
function CreateGroup() {
  const [name, onChangeName] = useInput(''); // 스터디 이름
  const [desc, onChangeDesc] = useInput(''); // 스터디 소개
  const [limitMember, onChangeLimitMember] = useInput(''); // 스터디 소개
  const [tags, setTags] = useState([]); // 태그 목록
  const [tag, onChangeTag, setTag] = useInput(''); // 입력한 태그 이름
  const [profileImage, setProfileImage] = useState(null); // 프로필 사진

  // 유효성 결과 변수들
  const [nameErr, setNameErr] = useState(false);
  const [limitMemberErr, setLimitMemberErr] = useState(false);
  const [descErr, setDescErr] = useState(false);
  const [tagsErr, setTagsErr] = useState(false);

  const navigate = useNavigate();

  // 해당 인덱스의 태그 삭제
  const deleteTags = useCallback(
    (index) => {
      setTags(tags.filter((_, i) => index !== i));
    },
    [tags]
  );

  // 입력한 태그를 태그 리스트에 추가
  const addTags = useCallback(() => {
    const addItem = tag.trim();
    if (isEmpty(addItem)) return;
    setTag('');
    setTags((prev) => [...prev, addItem]);
  }, [tag, setTag]);

  // 엔터키 눌렀을때 태그 리스트에 추가
  const [isComposing, setIsComposing] = useState(false);
  const onKeyDownTag = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key === 'Enter') {
        addTags();
      }
    },
    [addTags, isComposing]
  );

  // 스터디 폼 유효성 검사 (빈 칸 인지만 확인)
  const validateForm = () => {
    let flag = true;
    // 이름
    if (!name.trim()) {
      setNameErr(true);
      flag = false;
    } else setNameErr(false);
    // 설명
    if (!desc.trim()) {
      setDescErr(true);
      flag = false;
    } else setDescErr(false);
    // 인원
    if (!limitMember || limitMember < 1) {
      setLimitMemberErr(true);
      flag = false;
    } else setLimitMemberErr(false);
    // 태그
    if (isEmpty(tags)) {
      setTagsErr(true);
      flag = false;
    } else setTagsErr(false);
    return flag;
  };

  const [imageSrc, setImageSrc] = useState('');
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    setProfileImage(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
        }
        resolve();
      };
    });
  };

  // 파일 업로드 버튼 클릭 핸들러
  const fileInput = useRef(null);
  const clickUploadButton = useCallback(() => {
    fileInput.current?.click();
  }, []);

  // 그룹 생성 요청
  const requestCreateGroup = useRequest(createGroup);
  // 생성 버튼 클릭
  const onClickCreateButton = async () => {
    if (!validateForm()) return;
    const newGroup = {
      name,
      limitMember,
      description: desc,
      tag: tags,
    };
    const result = await requestCreateGroup(newGroup).catch((e) => {
      toast.error('그룹 생성에 실패하였습니다.');
    });
    navigate(`/group/${result.id}`);
  };

  return (
    <Container>
      <TitleDiv
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoChevronBack />
        그룹 생성
      </TitleDiv>
      <CreateForm>
        <FormItem isError={nameErr} flexDirection="column">
          <label>프로필 이미지</label>
          <ProfileInputWrapper>
            <ProfileImage
              width="10"
              height="7"
              src={imageSrc ? imageSrc : ''}
              onClick={clickUploadButton}
              cursor="pointer"
            >
              {!imageSrc && <CiCamera size="20" />}
            </ProfileImage>
            {/* <ProfileInputButton onClick={clickUploadButton}>
            <CiCamera />
          </ProfileInputButton> */}
            <input
              type="file"
              id="image"
              accept="image/*"
              ref={fileInput}
              onChange={(e) => {
                const selectedFile = e.target.files && e.target.files[0];
                if (
                  selectedFile?.type === 'image/png' ||
                  selectedFile?.type === 'image/jpeg' ||
                  selectedFile?.type === 'image/jpg'
                ) {
                  encodeFileToBase64(selectedFile);
                } else {
                  toast.error('png, jpg, jpeg 파일만 업로드할 수 있습니다.');
                }
              }}
            />
          </ProfileInputWrapper>
        </FormItem>
        <FormItem isError={nameErr} flexDirection="column">
          <label>그룹 이름</label>
          <input
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={onChangeName}
          />
        </FormItem>
        <FormItem isError={limitMemberErr} flexDirection="column">
          <label>그룹 인원</label>
          <input
            value={limitMember}
            placeholder="최대 인원을 입력해주세요"
            onChange={onChangeLimitMember}
            type="number"
          />
        </FormItem>
        <FormItem isError={descErr} textareaHeight="3" flexDirection="column">
          <label>그룹 설명</label>
          <textarea
            placeholder="50자 내외로 작성해주세요"
            value={desc}
            onChange={onChangeDesc}
            maxLength={50}
          />
        </FormItem>
        <FormItem isError={tagsErr} flexDirection="column">
          <label>태그</label>
          <input
            placeholder="태그를 입력하고 엔터를 눌러주세요."
            value={tag}
            onChange={onChangeTag}
            onKeyDown={onKeyDownTag}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
        </FormItem>
        {!isEmpty(tags) && (
          <FormItem emptyLabel flexDirection="column">
            <NameTagWrapper>
              {tags.map((user, i) => (
                <NameTagDiv key={i}>
                  {user}
                  <div
                    onClick={() => {
                      deleteTags(i);
                    }}
                  >
                    &times;
                  </div>
                </NameTagDiv>
              ))}
            </NameTagWrapper>
          </FormItem>
        )}
      </CreateForm>
      <Button onClick={onClickCreateButton}>생성하기</Button>
    </Container>
  );
}

export default CreateGroup;
