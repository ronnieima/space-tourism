type PageHeaderProps = {
  number: string;
  title: string;
};
export default function PageHeader({ number, title }: PageHeaderProps) {
  return (
    <h5 className="py-12  text-center uppercase text-white sm:self-start sm:px-4 sm:text-left">
      <span className={"font-bold text-slate-600"}>{number} </span>
      {title}
    </h5>
  );
}
