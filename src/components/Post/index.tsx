import PostComments from '../PostComments';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const PostContainer = styled.div`
    background-color: #fff;
    padding: 16px;
    box-shadow: 1px 2px 6px #333;
    border-radius: 16px;
`;

const PostImage = styled.img`
    max-width: 100%;
    display: block;
`

const PostText = styled.p`
    color: #333;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
`


const Post = ({ children, imageUrl }: Props) => (
    <PostContainer>
        <PostImage src={imageUrl} />
        <PostText>{children}</PostText>
        <PostComments />
    </PostContainer>
);

export default Post;