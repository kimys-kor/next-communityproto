import Tabs from "./Taps";

const NewPost = () => {
  const tabs = [
    { label: "Tab 1", content: <div>Content for Tab 1</div> },
    { label: "Tab 2", content: <div>Content for Tab 2</div> },
    { label: "Tab 3", content: <div>Content for Tab 3</div> },
  ];

  return (
    <div className="w-full bg-white">
      <Tabs tabs={tabs}></Tabs>
    </div>
  );
};

export default NewPost;
