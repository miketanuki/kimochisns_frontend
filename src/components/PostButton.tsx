type PostButtonProps = {
  setShowPostButton: (value: boolean) => void;
  showPostButton: boolean;
};

const PostButton = ({ setShowPostButton, showPostButton }: PostButtonProps) => {
  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setShowPostButton(!showPostButton)}
        style={{ width: "100px", height: "50px", backgroundColor: "rgb(144, 174, 238)" }}
      >
        {showPostButton ? "とじる" : "つぶやく"}
      </button>
    </div>
  );
};

export default PostButton;
