"use client";
import { useRouter } from "next/navigation";
import { ErrorComponent } from "./components/ErrorComponent";

export default function NotFound() {
  const router = useRouter();

  return (
    <ErrorComponent
      title="404 page not found"
      message="try to click on the Uatu's eye to go back"
      handler={router.back}
    />
  );
}
