import NoteCard from '../NoteCard';

export default function NoteCardExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <NoteCard
        id="1"
        title="數學課 - 三角函數"
        content="今天學習了 sin、cos、tan 的基本概念。三角函數在直角三角形中的應用非常重要，需要記住基本的公式和定理。"
        category="數學"
        categoryColor="hsl(280, 65%, 58%)"
        date={new Date(Date.now() - 1000 * 60 * 30)}
        onEdit={(id) => console.log('Edit note', id)}
        onDelete={(id) => console.log('Delete note', id)}
        onShare={(id) => console.log('Share note', id)}
      />
      <NoteCard
        id="2"
        title="英文課 - 現在完成式"
        content="Present perfect tense 用於表達過去發生但與現在有關的動作。常用的結構是 have/has + past participle。"
        category="英文"
        categoryColor="hsl(320, 70%, 70%)"
        date={new Date(Date.now() - 1000 * 60 * 60 * 2)}
        onEdit={(id) => console.log('Edit note', id)}
        onDelete={(id) => console.log('Delete note', id)}
        onShare={(id) => console.log('Share note', id)}
      />
      <NoteCard
        id="3"
        title="歷史課 - 文藝復興"
        content="文藝復興運動起源於14世紀的義大利，是歐洲文化藝術的重要轉折點。代表人物包括達文西、米開朗基羅等大師。"
        category="歷史"
        categoryColor="hsl(200, 75%, 60%)"
        date={new Date(Date.now() - 1000 * 60 * 60 * 24)}
        onEdit={(id) => console.log('Edit note', id)}
        onDelete={(id) => console.log('Delete note', id)}
        onShare={(id) => console.log('Share note', id)}
      />
    </div>
  );
}
