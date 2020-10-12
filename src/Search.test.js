import React from 'react';
import { render } from '@testing-library/react';

import Search from './Search';
// import { searchBooks2 } from './Search';

// import axios from 'axios';

// jest.mock('axios');

test('renders the inputs correctly', () => {
  const { getByLabelText } = render(<Search />);

  expect(getByLabelText('Search')).not.toBeNull();
  expect(getByLabelText('Author')).not.toBeNull();
  expect(getByLabelText('Language')).not.toBeNull();
});

// test('axios returns the correct response', () => {
//   axios.get.mockResolvedValue({
//     data: {
//       items: [
//         {
//           volumeInfo: {
//             title: 'Polecenie test',
//             authors: ['Noite.pl'],
//             description:
//               'Wszystko można przetestować, ale jak to zrobić z poziomu powłoki? Podczas wykorzystywania instrukcji sterujących w skryptach czy programach często napotykamy się na dokonywanie porównania czy sprawdzenia spełnienia jakiegoś warunku. Warunki te mogą opierać się zarówno o porównanie liczb jak i porównanie ciągu znaków czy sprawdzenia istnienia, zawartości lub typu pliku. Wszystkie powyższe warunki można sprawdzić wykorzystując polecenie test. Mikro-kurs ten jest obowiązkowy aby umieć tworzyć bardziej skomplikowane skrypty. Słowa kluczowe: test, porównanie, większy, mniejszy, czy istnieje Polecenie test Testowanie warunków Polecenie test Testowania wyrażeń arytmetycznych',
//             language: 'pl',
//           },
//         },
//         {
//           volumeInfo: {
//             title: 'Polecenie test2',
//             authors: ['Noite.pl'],
//             description:
//               'Wszystko można przetestować, ale jak to zrobić z poziomu powłoki? Podczas wykorzystywania instrukcji sterujących w skryptach czy programach często napotykamy się na dokonywanie porównania czy sprawdzenia spełnienia jakiegoś warunku. Warunki te mogą opierać się zarówno o porównanie liczb jak i porównanie ciągu znaków czy sprawdzenia istnienia, zawartości lub typu pliku. Wszystkie powyższe warunki można sprawdzić wykorzystując polecenie test. Mikro-kurs ten jest obowiązkowy aby umieć tworzyć bardziej skomplikowane skrypty. Słowa kluczowe: test, porównanie, większy, mniejszy, czy istnieje Polecenie test Testowanie warunków Polecenie test Testowania wyrażeń arytmetycznych',
//             language: 'pl',
//           },
//         },
//         {
//           volumeInfo: {
//             title: 'Polecenie test3',
//             authors: ['Noite.pl'],
//             description:
//               'Wszystko można przetestować, ale jak to zrobić z poziomu powłoki? Podczas wykorzystywania instrukcji sterujących w skryptach czy programach często napotykamy się na dokonywanie porównania czy sprawdzenia spełnienia jakiegoś warunku. Warunki te mogą opierać się zarówno o porównanie liczb jak i porównanie ciągu znaków czy sprawdzenia istnienia, zawartości lub typu pliku. Wszystkie powyższe warunki można sprawdzić wykorzystując polecenie test. Mikro-kurs ten jest obowiązkowy aby umieć tworzyć bardziej skomplikowane skrypty. Słowa kluczowe: test, porównanie, większy, mniejszy, czy istnieje Polecenie test Testowanie warunków Polecenie test Testowania wyrażeń arytmetycznych',
//             language: 'pl',
//           },
//         },
//       ],
//     },
//   });

//   const title = searchBooks2();
//   expect(title).toEqual('Polecenie test');
// });
