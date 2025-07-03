type SectionTitleProps = {
  title: string;
  details: string;
};
const SectionTitle = ({ title, details }: SectionTitleProps) => {
  return (
    <div className="sm:py-4 lg: py-10 ">
      <h2 className="text-center font-bold w-8/12 mx-auto text-5xl">{title}</h2>
      <p className="text-center w-9/12 mx-auto py-4">{details}</p>
    </div>
  );
};

export default SectionTitle;
