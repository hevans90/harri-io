import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../../message';

@Component({
  selector: 'harri-io-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.scss'],
})
export class CommentTreeComponent {
  error = '';

  messagesValue: Message[] = [
    {
      id: uuidv4(),
      sender: 'Amy',
      text: 'Hi guys I was just wondering if it was possible to still join the Gin + Juice event? I was hoping to get 3 invites. Thanks, Amy.',
      children: [
        {
          id: uuidv4(),
          sender: 'Dan',
          text: 'Hi, can you sign me up to your gig?',
          children: [
            {
              id: uuidv4(),
              sender: 'John',
              text: 'Sorry, no can do mate',
              children: [
                {
                  id: uuidv4(),
                  sender: 'Harri',
                  text: "Why not though? That's rubbish...",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          sender: 'Amy',
          text: 'Which one?',
          children: [],
        },
        {
          id: uuidv4(),
          sender: 'Dan',
          text: 'Next fri',
          children: [],
        },
      ],
    },
  ];

  get thread() {
    return this.prettyPrint(this.messagesValue);
  }

  set thread(v) {
    try {
      this.messagesValue = JSON.parse(v);
      this.error = '';
    } catch (e: any) {
      this.error = e.message;
      console.error('error occored while you were typing the JSON');
    }
  }

  prettyPrint = (obj: Object) => JSON.stringify(obj, undefined, 4);

  processMessageReply = (m: Message) => {
    this.messagesValue.forEach(
      (message, index, arr) =>
        (arr[index] = this.scan(m.id, (value: Message) => (value = m))(message))
    );

    this.thread = JSON.stringify(this.messagesValue);

    this.model = { ...this.model, value: this.thread };
  };

  scan = (id: any, transform: any) => (obj: Object) =>
    JSON.parse(
      JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null && value.id === id) {
          console.warn(transform(value));
          return transform(value);
        } else {
          return value;
        }
      })
    );

  theme = 'vs-dark';

  model: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: this.thread,
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value: any) {
    this.thread = value;
  }
}
