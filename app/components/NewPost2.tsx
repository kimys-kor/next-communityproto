const NewPost = () => {
  const tabs = [
    {
      label: "안구정화",
      content: ["축구1", "축구2", "축구3", "축구4", "축구5"],
    },
    {
      label: "이벤트",
      content: ["야구1", "야구2", "야구3", "야구4", "야구5"],
    },
    {
      label: "자유게시판",
      content: ["농구1", "농구2", "농구3", "농구4", "농구6"],
    },
    {
      label: "분석왕",
      content: ["배구1", "배구2", "배구3", "배구4", "배구5"],
    },
  ];

  return (
    <div className="container w-full bg-[#f7f8fa]/35 rounded-2xl shadow-md p-5 flex flex-col gap-5">
      <div className="text-md ">커뮤니티존</div>
    </div>
  );
};

export default NewPost;
