import { FormEvent, useState } from 'react';
import Comment from '../../models/Comment';
import styled from 'styled-components';

const PostCommentsContainer = styled.div`
`;

const CommentsList = styled.ul`
`;

const CommentItem = styled.li`
    color: #444;
    font-size: 12px;
    line-height: 20px;
    background-color: #ffff9f;
    padding: 8px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

const CommentContent = styled.p`
    font-style: italic;
`;

const CommentForm = styled.form`
    margin-top: 16px;
    text-align: right;
`;

const TextArea = styled.textarea`
    display: block;
    resize: none;
    width: 100%;
    margin-bottom: 8px;
    padding: 8px 16px;
    color: #333;
    font-size: 14px;
    line-height: 22px;
`;

const SubmitButton = styled.button`
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    background-color: #27ae60;
    color: #eee;
    cursor: pointer;
`;

const PostComments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <PostCommentsContainer>
            <CommentsList>
                {comments.map(({ comment, id }) => (
                    <CommentItem key={id}>
                        <CommentContent>{comment}</CommentContent>
                    </CommentItem>
                ))}
            </CommentsList>
            <CommentForm onSubmit={handleAddComment}>
                <TextArea 
                    value={tempComment} 
                    onChange={e => setTempComment(e.target.value)} 
                    required 
                    placeholder="Escreva seu comentário" 
                    data-testid="comment-textarea"
                />
                <SubmitButton type="submit">Comentar</SubmitButton>
            </CommentForm>
        </PostCommentsContainer>
    );
}

export default PostComments;
