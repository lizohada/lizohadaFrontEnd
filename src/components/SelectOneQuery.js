import ImageButton from "../components/ImageButton";
export default function SelectOneQuery({ array, handle }) {
  // array.map((element, index) => console.log(element));
  return (
    <>
      {array.map((element, index) => (
        <div className="max-w-24rem">
          <ImageButton
            handler={handle}
            keyword={element}
            srcLink={"/logo.png"}
          />
          <div className="py-4 px-4" />
        </div>
      ))}
    </>
  );
}
