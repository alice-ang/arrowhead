import { type ClassValue, clsx } from "clsx";
import { MotionValue, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
