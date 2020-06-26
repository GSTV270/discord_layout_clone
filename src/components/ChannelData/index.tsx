import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
        />
        <ChannelMessage
          author="Gustavo Agibert"
          content="Olá mundo!"
          date="27/02/2020"
          isBot
        />
        <ChannelMessage
          hasMention
          author="Gustavo Agibert"
          content={(
            <>
              <Mention>@Gustavo Agibert</Mention> Olá!
            </>
          )}
          date="27/02/2020"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
