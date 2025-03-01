const Footer = () => {
  return (
    <div className="border-t border-teal-600 text-gray-300 p-10">
      <aside>
        <p className="font-medium text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by Liton
        </p>
      </aside>
    </div>
  );
};

export default Footer;
