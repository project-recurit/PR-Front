"use client";

import { NOTIFICATION_TEMPLATE } from "@/constants/notificationTemplates";

interface NotificationCardProps {
  notificationType: keyof typeof NOTIFICATION_TEMPLATE;
  read?: boolean;
  subject: string;
  receivedAt: string;
}

const NotificationCard = ({ notificationType, subject, receivedAt }: NotificationCardProps) => {
  const { icon: Icon, message } = NOTIFICATION_TEMPLATE[notificationType];
  return (
    <div>
      <Icon />
      <span>{message(subject)}</span>
      <span>{receivedAt}</span>
    </div>
  );
};

export default NotificationCard;
