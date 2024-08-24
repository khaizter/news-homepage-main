import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import iconClose from "@/assets/images/icon-menu-close.svg";

const MenuOverlay = (props) => {
  const { open, onClose, navigationItems } = props;
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) return null;

  return ReactDom.createPortal(
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={{
                hidden: {
                  x: "100%",
                  opacity: 1,
                  transition: {
                    when: "afterChildren",
                    ease: "easeInOut",
                  },
                },
                visible: {
                  x: "0",
                  opacity: 1,
                  transition: {
                    when: "beforeChildren",
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed z-50 right-0 top-0 bottom-0 w-60 bg-off-white text-very-dark-blue"
            >
              <div>
                <motion.header
                  variants={{
                    hidden: { opacity: 1 },
                    visible: {
                      opacity: 1,
                    },
                  }}
                  className="flex items-center justify-end py-10 lg:py-14 px-4 md:px-8 w-full"
                >
                  <motion.button
                    variants={{
                      initial: {
                        scale: 1,
                      },
                      hover: {
                        scale: 1.1,
                      },
                    }}
                    initial="initial"
                    whileHover="hover"
                    onClick={onClose}
                  >
                    <Image
                      src={iconClose}
                      alt="hamburger-button"
                      width="26"
                      height="26"
                    />
                  </motion.button>
                </motion.header>

                <nav className="h-screen pt-10 pl-6">
                  <motion.ul
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          when: "beforeChildren",
                          staggerChildren: 0.05,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    className="text-xl capitalize text-very-dark-blue leading-loose font-josefin-sans"
                  >
                    {navigationItems.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                            },
                          }}
                          className="pr-4"
                        >
                          <motion.div
                            variants={{
                              initial: {
                                color: "hsl(240, 100%, 5%)",
                              },
                              hover: {
                                color: "hsl(236, 13%, 42%)",
                              },
                            }}
                            initial="initial"
                            whileHover="hover"
                          >
                            {item.label}
                          </motion.div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </nav>
              </div>
            </motion.div>
            <div className="fixed inset-0 bg-very-dark-blue/50"></div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.getElementById("menu-portal")
  );
};

export default MenuOverlay;
