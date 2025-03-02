"use client";

import type { NOTIFICATION_TYPE } from "@/assets/constantData";
import { FaceNeutral, FaceSmile, MessageCircle, MessageSquare } from "@/assets/icons";

interface NotificationCardProps {
  notificationType: NOTIFICATION_TYPE;
  read?: boolean;
  subject: string;
}

const notificationIcons = {
  ACCEPT: { icon: FaceSmile, message: (subject: string) => `\`${subject}\`에 수락됐어요.` },
  REJECT: { icon: FaceNeutral, message: (subject: string) => `\`${subject}\`에 거절됐어요.` },
  COMMENT: { icon: MessageSquare, message: (subject: string) => `\`${subject}\`에 새로운 댓글이 달렸어요.` },
  CHAT: { icon: MessageCircle, message: (subject: string) => `\`${subject}\`님과 새로운 채팅이 시작됐어요.` },
};

const NotificationCard = ({ notificationType, subject }: NotificationCardProps) => {
  const { icon: Icon, message } = notificationIcons[notificationType];
  return (
    <div>
      <Icon />
      <span>{message(subject)}</span>
    </div>
  );
};

export default NotificationCard;
