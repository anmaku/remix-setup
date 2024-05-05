import type { MetaFunction } from "@remix-run/node";
import { Button } from '@mui/material';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Button variant="contained">ボタン</Button>
  );
}