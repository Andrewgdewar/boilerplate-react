import Flex from "../Components/Flex/Flex";
import TabPanel from "../Components/TabbablePanel/TabbablePanel";
import Tabs from "../Components/Tabs/Tabs";

export default function TabPanelPage() {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      flexGrow={1}
      fullWidth
      fullHeight
      alignItems="center"
    >
      <Tabs />
      <TabPanel />
    </Flex>
  );
}
