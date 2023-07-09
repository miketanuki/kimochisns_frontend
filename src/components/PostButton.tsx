type PostButtonProps = {
  setShowPostButton: (value: boolean) => void;
  showPostButton: boolean;
};

const PostButton = ({ setShowPostButton, showPostButton }: PostButtonProps) => {
  return (
    <>
      {showPostButton ? (
        <div className="fixed bottom-4 right-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setShowPostButton(false)}
          >
            とじる
          </button>
        </div>
      ) : (
        <div className="fixed bottom-4 right-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setShowPostButton(true)}
          >
            つぶやく
          </button>
        </div>
      )}
    </>
  );
};

export default PostButton;
