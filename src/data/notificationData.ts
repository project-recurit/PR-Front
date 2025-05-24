import { FaceNeutral, FaceSmile, MessageCircle, MessageSquare } from "@/assets/svgs/icons";

export const NOTIFICATION_TYPE = {
  accept: { icon: FaceSmile, message: (subject: string) => `\`${subject}\`에 수락됐어요.` },
  reject: { icon: FaceNeutral, message: (subject: string) => `\`${subject}\`에 거절됐어요.` },
  comment: { icon: MessageSquare, message: (subject: string) => `\`${subject}\`에 새로운 댓글이 달렸어요.` },
  chat: { icon: MessageCircle, message: (subject: string) => `\`${subject}\`님과 새로운 채팅이 시작됐어요.` },
};
