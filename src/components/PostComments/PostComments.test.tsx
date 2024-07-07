import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);

        const textArea = screen.getByPlaceholderText('Escreva seu comentário');
        const submitButton = screen.getByText('Comentar');

        fireEvent.change(textArea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        fireEvent.change(textArea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
