"use client";

import { useState, ReactNode } from "react";
import { Button } from "../button";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function Card({
  title,
  slug,
  type = "default",
  color = "white",
  subtitle,
  children,
}: {
  title: string;
  slug?: string;
  type?: "default" | "event" | "project" | "faq" | "partner" | "link";
  color?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-${color}`}>
      <div className="p-5">
        <h4 className="mb-2 mt-0 text-xl font-bold md:text-2xl">{title}</h4>
        <div className="mb-12">{subtitle}</div>
        {
          {
            default: null,
            event: (
              <Button
                label="More about the event"
                target={`/events/${slug}`}
                type="primary"
              />
            ),

            project: (
              <Button
                label="More about the project"
                target={`/projects/${slug}`}
                type="card"
              />
            ),

            faq: (
              <Button
                label="Learn more here"
                target={() => setOpen(true)}
                type="sidebar"
              />
            ),

            link: (
              <Button label="To the Projects" target={`${slug}`} type="card" />
            ),

            partner: null,
          }[type]
        }
        {type !== "faq" ? children : null}
      </div>
      {type === "faq" ? (
        <Transition show={open}>
          <Dialog className="relative z-10" onClose={setOpen}>
            <TransitionChild
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
            </TransitionChild>

            <div className="prose fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                  <TransitionChild
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <DialogPanel className="pointer-events-auto w-screen max-w-3xl">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-10 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <DialogTitle className="text-2xl font-semibold leading-6 text-slate-700">
                              {title}
                            </DialogTitle>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="focus:ring-indigo-500 relative rounded-md bg-white text-slate-300 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-2.5" />
                                <span className="sr-only">Close</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {children}
                        </div>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : null}
    </div>
  );
}
