import { PostModalProps } from '@/interfaces';
import React, { useState } from 'react';

const PostModal: React.FC<PostModalProps> = ({isOpen, onClose, onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(title, content);
        setTitle('');
        setContent('');
        onClose();
    };

  
    
    return (
        <div className = "fixed insert-0 bg-black bg-opacity-40 flex items-center justified-center z-50">
            <div className = "bg-white 0=6 rounded shadow-lg w-full max-w-md">
                <h2 className = " text-xl font-bold mb-4"> Add New Card</h2> 
                <form onSubmit = {handleSubmit}>
                    <input 
                        className = "w-full border p-2 mb-3"
                        type = "text"
                        placeholder = "Title"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}  
                        required             
                    />

                    <textarea
                        className = "w-full border p-2 mb-3"
                        placeholder = "content"
                        value = {content}
                        onChange = {e => setContent(e.target.value)}
                        required
                    />

                    <div className = "flex justify-end space-x-2">
                        <button
                            type = "button" 
                            className = "px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Cancel
                        </button>
                        <button 
                             type = "submit"
                             className = "px-4 py-2 bg-blue-600 text-white rounded"
                        > 
                        Add
                        </button>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default PostModal;