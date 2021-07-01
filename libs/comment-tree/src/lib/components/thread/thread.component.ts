import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { generateFromString } from 'generate-avatar';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../../message';

@Component({
  selector: 'harri-io-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() messages: Message[] = [];

  @Output()
  messageReplier = new EventEmitter<Message>();

  replyToMessage = (message: Message, { target: { value } }: any) => {
    message.replying = false;

    const children = message.children as Message[];

    this.messageReplier.emit({
      ...message,
      replying: false,
      children: [
        { id: uuidv4(), sender: 'Me', text: value, children: [] },
        ...children,
      ],
    });
  };

  sanitize = (url: string) => this.sanitizer.bypassSecurityTrustUrl(url);

  generateAvatarBuffer = (name: string) => generateFromString(name);
}
