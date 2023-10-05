export interface FormItemProps {
    // Image
    imageLink: string,
    imageWidth?: number,
    imageHeight?: number,
    imageAlt: string,
    // Input
    inputPlaceholder: string
    inputValue?: string | number,
    inputType: string,
    valueChanger?: any
}