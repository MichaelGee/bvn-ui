export const formatName = ({
  firstName = '',
  lastName = '',
}) => `${firstName} ${lastName}`;

export const isObjEmpty = (obj) =>
  typeof obj === 'object' &&
  !Object.entries(obj).length;

export const ellipsize = (text, maxlimit) => {
  if (text) {
    if (text.length > maxlimit) {
      return `${text.substring(
        0,
        maxlimit - 3
      )}...`;
    }
    return text;
  }
  return '';
};

export const validateEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    email
  );
};
export const validatePassword = (password) => {
  return /[0-9a-zA-Z]{6,}/.test(password);
};

export const validateAccNumber = (number) => {
  return /^[0-9]{10}$/.test(number);
};

export const validateBVN = (number) => {
  return /^[0-9]{11}$/.test(number);
};

export function durationInSeconds(d) {
  if (d && d.length > 0) {
    const a = d.split(':');
    return +a[0] * 60 + +a[1];
  }
  return 0;
}

export const commarize = (x) => {
  if (isNaN(x)) return x;
  if (x < 1000) return x;
  if (x < 10000)
    return `${(x / 1000).toFixed(2)}K`;
  if (x < 100000)
    return `${(x / 1000).toFixed(1)}K`;
  if (x < 1000000)
    return `${Math.round(x / 1000)}K`;
  if (x < 10000000)
    return `${(x / 1000000).toFixed(2)}M`;
  if (x < 100000000)
    return `${(x / 1000000).toFixed(1)}M`;
  if (x < 1000000000)
    return `${Math.round(x / 1000000)}M`;
  if (x < 1000000000000)
    return `${Math.round(x / 1000000000)}B`;
  return '1T+';
};

export const firstLetterUc = (string) => {
  if (string) {
    return (
      string.charAt(0).toUpperCase() +
      string.slice(1)
    );
  }
  return '';
};

export const shuffleArray = (arr) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const flattenArray = (arr) =>
  [].concat.apply([], arr);

export const convertArrayToObject = (
  array,
  key,
  value = null
) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: value || item,
    };
  }, initialValue);
};

export const numbersOnly = (n) => {
  if (n) {
    const num = `${n}`;
    const regex = /\D/gm;
    return num.replace(regex, '');
  }
  return '';
};

export const reorder = (
  list,
  startIndex,
  endIndex
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const filterPlainArray = (
  arr,
  key,
  toRemove
) => {
  return arr.reduce((acc, v) => {
    if (!toRemove.includes(v[key])) {
      acc.push(v);
    }
    return acc;
  }, []);
};

export const sortArrFromObjIndex = (
  arr,
  obj,
  prop = 'id'
) => {
  const indexes = Object.values(obj);
  const sortedIndexes = indexes.sort((a, b) => {
    return a - b;
  });
  return sortedIndexes.map((keyProp) => {
    return arr.find(
      (track) => track[prop] === keyProp
    );
  });
};

export const copyText = (text) => {
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

export const generateID = () =>
  `_${Math.random().toString(36).substr(2, 9)}`;

export const debounce = (fn, time) => {
  let timeout;
  // eslint-disable-next-line
  return function () {
    const functionCall = () =>
      fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export const objectsEqual = (o1, o2) => {
  if (o1 === null && o2 === null) {
    return true;
  }
  if (typeof o1 === 'object') {
    if (Object.keys(o1).length > 0) {
      if (
        Object.keys(o1).length ===
        Object.keys(o2).length
      ) {
        return Object.keys(o1).every((p) =>
          objectsEqual(o1[p], o2[p])
        );
      }
      return false;
    }
    return true;
  }
  return o1 === o2;
};

export const arrayOfObjectsEqual = (a1, a2) =>
  a1.length === a2.length &&
  a1.every((o, idx) => {
    return objectsEqual(o, a2[idx]);
  });

export const generateUrlQueryParams = (
  values,
  base = '/view-more?'
) => {
  const params = Object.entries(values)
    .reduce((acc, [key, value]) => {
      if (value) {
        acc.push(`${key}=${value}`);
      }
      return acc;
    }, [])
    .join('&');

  return encodeURI(`${base}${params}`);
};

export const getURLParameter = (name, url) => {
  return (
    decodeURIComponent(
      (new RegExp(
        `[?|&]${name}=([^&;]+?)(&|#|;|$)`
      ).exec(url) || [null, ''])[1].replace(
        /\+/g,
        '%20'
      )
    ) || null
  );
};

export const getEntityAndIdFromLink = (link) => {
  const [entity, id] = link
    .split('/')
    .slice(1)
    .slice(-2);

  return {entity, id};
};

export function getMobileOperatingSystem() {
  const userAgent =
    navigator.userAgent ||
    navigator.vendor ||
    window.opera;

  if (/windows phone/i.test(userAgent)) {
    return 'windows-mobile';
  }

  if (/android/i.test(userAgent)) {
    return 'android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (
    /iPad|iPhone|iPod/.test(userAgent) &&
    !window.MSStream
  ) {
    return 'ios';
  }

  return 'unknown';
}

export const getDayAndMonth = (rawDate) => {
  const date = new Date(rawDate);
  const day =
    date.getDate() < 10
      ? '0' + date.getDate()
      : date.getDate();
  const month = getMonthByIndex(date.getMonth())
    .name;
  return `${day} ${month}`;
};

export const getMonthByIndex = (index) => {
  const months = [
    {name: 'January', shortName: 'Jan'},
    {name: 'February', shortName: 'Feb'},
    {name: 'March', shortName: 'Mar'},
    {name: 'April', shortName: 'April'},
    {name: 'May', shortName: 'May'},
    {name: 'June', shortName: 'June'},
    {name: 'July', shortName: 'July'},
    {name: 'August', shortName: 'Aug'},
    {name: 'September', shortName: 'Sept'},
    {name: 'October', shortName: 'Oct'},
    {name: 'November', shortName: 'Nov'},
    {name: 'December', shortName: 'Dec'},
  ];
  return months[index];
};

export const getHighResolutionPicture = (
  pictures
) => {
  if (pictures) {
    const images = pictures.sizes;
    const highest = images.reduce((acc, curr) => {
      return acc.width > curr.width ? acc : curr;
    }, {});
    return highest;
  }
};
