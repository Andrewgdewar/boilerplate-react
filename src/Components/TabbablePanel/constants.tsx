export interface Tab {
  id: string;
  label: string;
  url_param: string;
  content: React.ReactNode;
}

export const tabsData: Tab[] = [
  {
    id: "1",
    label: "Basic Plan",
    url_param: "basic_plan",
    content: <p>Access core features for $10/month.</p>,
  },
  {
    id: "2",
    label: "Pro Plan",
    url_param: "pro_plan",
    content: <p>Unlock premium tools for $20/month.</p>,
  },
  {
    id: "3",
    label: "Elite Plan",
    url_param: "elite_plan",
    content: <div>Full access + support for $30/month.</div>,
  },
];
