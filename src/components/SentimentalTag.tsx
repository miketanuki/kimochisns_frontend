import React, { useState, useEffect } from "react";

//propsのsentiment_scoreを型定義する
type Props = {
    sentiment_score: number;
};

const PostList: React.FC<Props> = (props) => {
    //propsが6未満だったら「ちくちく」、6以上だったら「にこにこ」と表示する、7以上なら「しあわせ」
    const [sentimentalTag, setSentimentalTag] = useState<string>("");
    useEffect(() => {
        if (props.sentiment_score < 0.6) {
            setSentimentalTag("ちくちく");
        } else if (props.sentiment_score >= 0.6 && props.sentiment_score < 0.7) {
            setSentimentalTag("ふつー");
        } else {
            setSentimentalTag("しあわせ");
        }
    }, [props.sentiment_score]);

  return (
    <div>
        {sentimentalTag}ことば
    </div>
  );
};

export default PostList;
