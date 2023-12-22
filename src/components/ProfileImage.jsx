import styled from '@emotion/styled';

const ProfileImage = styled.div`
  ${(props) => props.width && `width: ${props.width}rem`};
  ${(props) => props.height && `height: ${props.height}rem`};
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c9c9d7;
  ${(props) => props.cursor && `cursor:${props.cursor};`}
`;

export default ProfileImage;
