import OpenProject from "@/components/OpenProject";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <>
      <OpenProject id={id} />
    </>
  );
};
export default Project;
