import { useMemo } from "react";
import { tabsData } from "./constants";
import { useSearchParams } from "react-router";
import Flex from "../Flex/Flex";

export default function TabPanel() {
  const [urlParams] = useSearchParams();

  const selectetTab = useMemo(() => urlParams.get("tab"), [urlParams]);

  return (
    <Flex flex={8} alignItems="center" justifyContent="center" fullWidth>
      {tabsData.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={tab.id}
          hidden={selectetTab !== tab.url_param}
        >
          <h3>{tab.content}</h3>
        </div>
      ))}
    </Flex>
  );
}
