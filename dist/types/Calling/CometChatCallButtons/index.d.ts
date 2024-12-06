import { CallButtonsStyle, CallScreenConfiguration, OutgoingCallConfiguration } from "@cometchat/uikit-shared";
interface ICallButtonsBaseProps {
    voiceCallIconURL?: string;
    voiceCallIconText?: string;
    voiceCallIconHoverText?: string;
    videoCallIconURL?: string;
    videoCallIconText?: string;
    videoCallIconHoverText?: string;
    callButtonsStyle?: CallButtonsStyle;
    onVoiceCallClick?: () => void;
    onVideoCallClick?: () => void;
    onError?: (error: CometChat.CometChatException) => void;
    user?: CometChat.User | null;
    group?: CometChat.Group | null;
    outgoingCallConfiguration?: OutgoingCallConfiguration;
    ongoingCallConfiguration?: CallScreenConfiguration;
}
declare const CometChatCallButtons: (props: ICallButtonsBaseProps) => import("react/jsx-runtime").JSX.Element;
export { CometChatCallButtons };
