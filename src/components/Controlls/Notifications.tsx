type Props = {
  amount: number;
};
const Notifications = ({ amount }: Props) => {
  return (
    <div className="absolute h-[14px] w-[14px] rounded-full bg-site-lightblue text-center text-[10px] not-italic leading-4 text-white">
      {amount}
    </div>
  );
};
export default Notifications;
