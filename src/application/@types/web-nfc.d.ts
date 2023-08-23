declare class NDEFReader extends EventTarget {
    constructor();
    scan(): Promise<NDEFReadingEvent>;
}

interface NDEFReadingEventInit extends EventInit {
    records: NDEFRecord[];
}

declare class NDEFReadingEvent extends Event {
    constructor(type: string, eventInitDict?: NDEFReadingEventInit);
    readonly records: NDEFRecord[];
}

interface NDEFRecord {
    recordType: string;
    mediaType: string;
    data: ArrayBuffer;
    encoding: string;
}

declare global {
    interface Navigator {
        readonly nfc?: NDEFReader;
    }
}
