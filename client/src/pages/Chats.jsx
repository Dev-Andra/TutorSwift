import React, { useEffect } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';

export default function Chats() {
    useEffect(() => {
        // Initialize CometChat
        CometChat.init('YOUR_APP_ID').then(
            () => {
                console.log('CometChat initialized successfully');
                // You can perform additional actions after initialization here
            },
            error => {
                console.log('CometChat initialization failed with error:', error);
            }
        );

        // Cleanup function
        return () => {
            // Perform cleanup if needed
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            {/* Your chat interface components go here */}
        </div>
    );
}
