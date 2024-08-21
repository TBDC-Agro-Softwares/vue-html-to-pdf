declare const _default: import('vue').DefineComponent<{
    showLayout: {
        type: BooleanConstructor;
        default: boolean;
    };
    floatLayout: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableDownload: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginateElementsByHeight: {
        type: NumberConstructor;
        default: null;
    };
    filename: {
        type: StringConstructor;
        default: string;
    };
    pdfQuality: {
        type: NumberConstructor;
        default: number;
    };
    pdfFormat: {
        default: string;
    };
    pdfOrientation: {
        type: StringConstructor;
        default: string;
    };
    pdfContentWidth: {
        default: string;
    };
    htmlToPdfOptions: {
        type: ObjectConstructor;
        default: () => void;
    };
    manualPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    hasAlreadyParsed: boolean;
    progress: number;
    pdfWindow: null;
    pdfFile: null;
}, {}, {
    validateProps(): void;
    resetPagination(): void;
    generatePdf(): void;
    paginationOfElements(): void;
    downloadPdf(): Promise<void>;
    setOptions(): Record<string, any>;
    closePreview(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    showLayout: {
        type: BooleanConstructor;
        default: boolean;
    };
    floatLayout: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableDownload: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginateElementsByHeight: {
        type: NumberConstructor;
        default: null;
    };
    filename: {
        type: StringConstructor;
        default: string;
    };
    pdfQuality: {
        type: NumberConstructor;
        default: number;
    };
    pdfFormat: {
        default: string;
    };
    pdfOrientation: {
        type: StringConstructor;
        default: string;
    };
    pdfContentWidth: {
        default: string;
    };
    htmlToPdfOptions: {
        type: ObjectConstructor;
        default: () => void;
    };
    manualPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    paginateElementsByHeight: number;
    showLayout: boolean;
    floatLayout: boolean;
    enableDownload: boolean;
    previewModal: boolean;
    filename: string;
    pdfQuality: number;
    pdfFormat: string;
    pdfOrientation: string;
    pdfContentWidth: string;
    htmlToPdfOptions: Record<string, any>;
    manualPagination: boolean;
}, {}>;
export default _default;
