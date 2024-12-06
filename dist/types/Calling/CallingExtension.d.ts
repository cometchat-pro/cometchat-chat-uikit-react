import { CallingConfiguration, CallingExtensionDataSource } from '@cometchat/uikit-shared';
export declare class CallingExtension extends CallingExtensionDataSource {
    private configuration?;
    constructor(configuration?: CallingConfiguration);
    enable(): void;
    addExtension(): void;
    getExtensionId(): string;
}
