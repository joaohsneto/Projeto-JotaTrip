import React from 'react';
interface Modal {
  children: React.ReactNode;
  isVisible: boolean;
}

export const Modal = ({ children, isVisible }: Modal) => {
  if (!isVisible) return null;
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-gray-100 w-96 h-96">{children}</div>
    </div>
  );
};
