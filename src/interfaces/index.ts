import {ChangeEvent, ReactNode} from "react";

export interface DynamicKeyStringPair {
  [key: string]: string
}

export interface DynamicKeyStringNumberPair {
  [key: string]: string | number
}

export interface ISelectCallback {
  cb: (event: ChangeEvent<HTMLSelectElement>) => void
}

export interface IInputCallback {
  cb: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface PortalAndContextProps {
  children?: ReactNode
}

export interface IGridItem {
  name: string,
  image: string,
  description: string,
  permalink: string
  openPortal?: () => void,
  closePortal?: () => void,
}