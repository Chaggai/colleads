type Props = {
  count: number;
};
const NotificationsCounter = ({ count }: Props) => {
  return (
    <i className="absolute right-0 top-0 h-[14px] min-w-[14px] rounded-full bg-site-lightblue text-center text-[10px] not-italic leading-4 text-white">
      {count}
    </i>
  );
};
export default NotificationsCounter;
