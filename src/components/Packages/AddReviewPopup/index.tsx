import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
// import { IconType } from 'react-icons'
import styles from './addReviewPopup.module.css';

export default function AddReviewPopup() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className='inset-0 flex items-center justify-center mt-4'>
        <button
          type='button'
          onClick={openModal}
          style={{ backgroundColor: '#8000ff' }}
          className='rounded-md px-4 py-2 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          Add Review
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6  align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className={`text-lg font-medium leading-6 text-gray-900 text-center`}
                  >
                    <div className={styles.label}>Add Review</div>
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      <textarea className='w-96 h-60' placeholder='Add your review here' />
                    </p>
                    <div className='mt-3  font-medium text-green-700 dark:text-green-500 float-left text-xs'>
                      Hack Coins
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
                      <div
                        className='bg-green-600 h-2.5 rounded-full dark:bg-green-500'
                        style={{ width: `45%` }}
                      ></div>
                    </div>

                    <form className='flex items-center space-x-6'>
                      <label className='block my-5'>
                        <span className='sr-only'>Choose profile photo</span>
                        <input
                          type='file'
                          className='block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            '
                        />
                      </label>
                    </form>
                    {/* <p style={{fontSize:13,textAlign:'left',color:'#778899'}} className='decoration-zinc-500 font-thin'>Tip: Review with pictures has higher chances to get featured</p> */}
                  </div>
                  <div className='mt-4 justify-center items-center'>
                    <button
                      type='button'
                      className='px-9 py-3 mb-3 text-center justify-center rounded-md border border-transparent bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      SUBMIT
                    </button>
                    <p
                      className='decoration-slate-50 flex justify-center items-center text-xs'
                      style={{ fontSize: 13, textAlign: 'left', color: '#778899' }}
                    >
                      Note: All reviews will be verified by our team{' '}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// const IconTitle = ({ Icon, title }: { Icon: IconType; title: string }) => {
//   return (
//     <div className='flex text-gray-500 text-sm items-center font-light'>
//       <Icon />
//       <div className='ml-1'>{title}</div>
//     </div>
//   );
//
