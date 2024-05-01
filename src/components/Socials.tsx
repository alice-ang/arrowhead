import Link from "next/link";
import React, { FC } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaYoutube,
  FaItchIo,
  FaSteam,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type SocialsProps = {
  size?: number;
  color?: string;
};

export const Socials: FC<SocialsProps> = ({ size = 26, color = "white" }) => {
  return (
    <div className="flex flex-row justify-center items-center space-x-4">
      <FaXTwitter color={color} size={size} />
      <FaFacebook color={color} size={size} />
      <FaInstagram color={color} size={size} />
      <FaLinkedin color={color} size={size} />
    </div>
  );
};
