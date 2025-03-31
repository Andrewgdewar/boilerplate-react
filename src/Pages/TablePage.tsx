import Flex from "../Components/Flex/Flex";
import Table from "../Components/Table/Table";

export default function TablePage() {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      flexGrow={1}
      fullWidth
      fullHeight
      alignItems="center"
    >
      <Table />
    </Flex>
  );
}
