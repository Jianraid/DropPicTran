export interface AppSettings {
  saveDirectoryName?: string; // Display name of the selected directory
  filePrefix: string;
  timestampFormat: 'ISO' | 'Compact' | 'None';
  fileFormat: 'original' | 'jpg' | 'png';
}

export interface TransferFile {
  id: string;
  name: string;
  size: number;
  type: string;
  data?: Blob;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  timestamp: number;
  isSaved?: boolean; // Indicates if the file was successfully saved to disk
}

export interface PeerMessage {
  type: 'handshake' | 'file-transfer' | 'ack';
  payload: any;
}

// File System Access API Types
export interface FileSystemHandle {
  readonly kind: 'file' | 'directory';
  readonly name: string;
}

export interface FileSystemDirectoryHandle extends FileSystemHandle {
  getFileHandle(name: string, options?: { create?: boolean }): Promise<FileSystemFileHandle>;
  getDirectoryHandle(name: string, options?: { create?: boolean }): Promise<FileSystemDirectoryHandle>;
  removeEntry(name: string, options?: { recursive?: boolean }): Promise<void>;
  resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}

export interface FileSystemFileHandle extends FileSystemHandle {
  createWritable(options?: { keepExistingData?: boolean }): Promise<FileSystemWritableFileStream>;
  getFile(): Promise<File>;
}

export interface FileSystemWritableFileStream extends WritableStream {
  write(data: BufferSource | Blob | string): Promise<void>;
  seek(position: number): Promise<void>;
  truncate(size: number): Promise<void>;
  close(): Promise<void>;
}

// Extend Window interface for showDirectoryPicker
declare global {
  interface Window {
    showDirectoryPicker(options?: {
      id?: string;
      mode?: 'read' | 'readwrite';
      startIn?: FileSystemHandle | 'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos';
    }): Promise<FileSystemDirectoryHandle>;
  }
}
