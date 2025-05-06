"use client";

import { NOTIFICATION_TYPE } from "@/assets/constantData";

interface NotificationCardProps {
  notificationType: keyof typeof NOTIFICATION_TYPE;
  read?: boolean;
  subject: string;
  receivedAt: string;
}

const NotificationCard = ({ notificationType, subject, receivedAt }: NotificationCardProps) => {
  const { icon: Icon, message } = NOTIFICATION_TYPE[notificationType];
  return (
    <div>
      <Icon />
      <span>{message(subject)}</span>
      <span>{receivedAt}</span>
    </div>
  );
};

export default NotificationCard;
