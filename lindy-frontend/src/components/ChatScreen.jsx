import VideoContainer from './VideoContainer';
import ChatContainer from './ChatContainer';
import useWebRTC from '../hooks/useWebRTC';

export default function ChatScreen() {
  const { localRef, remoteRef, sendMessage, messages } = useWebRTC();

  return (
    <div className="chat-screen">
      <VideoContainer
        localVideoRef={localRef}
        remoteVideoRef={remoteRef}
      />
      <ChatContainer
        messages={messages}
        onSend={sendMessage}
      />
    </div>
  );
}
