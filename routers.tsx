// 所有的组件示例
import Button from './examples/Button';
import Icon from './examples/Icon';

import NavigationBar from './examples/NavigationBar';

import Form from './examples/Form';
import Input from './examples/Input';
import Radio from './examples/Radio';
import Checkbox from './examples/Checkbox';
import Switch from './examples/Switch';
import Slider from './examples/Slider';
import Rate from './examples/Rate';
import Stepper from './examples/Stepper';
import Scrollpicker from './examples/Scrollpicker';
import Calendar from './examples/Calendar';
import Cascader from './examples/Cascader';

import Modal from './examples/Modal';
import Dialog from './examples/Dialog';
import Tip from './examples/Tip';
import SlideModal from './examples/SlideModal';
import Actionsheet from './examples/Actionsheet';
import BottomModal from './examples/BottomModal';
import Picker from './examples/Picker';

import Tab from './examples/Tab';
import Progress from './examples/Progress';
import Longlist from './examples/Longlist';
import Dropdown from './examples/Dropdown';
import Badge from './examples/Badge';
import Tag from './examples/Tag';
import AnimationsScreen from './examples/common/AnimationsScreen';
import TreeScreen from './examples/common/TreeScreen';
import Popover from './examples/Popover';
import TreeView from './examples/TreeView';
import Ruler from './examples/Ruler';
import Topview from './examples/Topview';
import Demo1Screen from './examples/Demo1Screen';
import Demo2Screen from './examples/Demo2Screen';
import Demo3Screen from './examples/Demo3Screen';
import Demo4Screen from './examples/Demo4Screen';

console.disableYellowBox = true;

export const pageList = [
  {
    screen: Button,
    key: 'Button',
    group: 'general',
    label: '按钮',
  },

  {
    screen: Icon,
    key: 'Icon',
    group: 'general',
    label: '图标',
  },

  {
    screen: NavigationBar,
    key: 'NavigationBar',
    group: 'navigation',
    label: '导航条',
  },

  {
    screen: Form,
    key: 'Form',
    group: 'dataEntry',
    label: '表单',
  },

  {
    screen: Input,
    key: 'Input',
    group: 'dataEntry',
    label: '输入框',
  },

  {
    screen: Radio,
    key: 'Radio',
    group: 'dataEntry',
    label: '单选',
  },

  {
    screen: Checkbox,
    key: 'Checkbox',
    group: 'dataEntry',
    label: '多选',
  },
  {
    screen: Switch,
    key: 'Switch',
    group: 'dataEntry',
    label: '开关',
  },
  {
    screen: Slider,
    key: 'Slider',
    group: 'dataEntry',
    label: '滑块',
  },
  {
    screen: Rate,
    key: 'Rate',
    group: 'dataEntry',
    label: '评分',
  },
  {
    screen: Stepper,
    key: 'Stepper',
    group: 'dataEntry',
    label: '计步器',
  },

  {
    screen: Scrollpicker,
    key: 'Scrollpicker',
    label: '滚动选择',
    group: 'dataEntry',
  },

  {
    screen: Calendar,
    key: 'Calendar',
    label: '日历',
    group: 'dataEntry',
  },

  {
    screen: Cascader,
    key: 'Cascader',
    label: '级联菜单',
    group: 'dataEntry',
  },

  {
    screen: Progress,
    key: 'Progress',
    group: 'dataDisplay',
    label: '进度条',
  },

  {
    screen: Badge,
    key: 'Badge',
    group: 'dataDisplay',
    label: '角标',
  },

  {
    screen: Tag,
    key: 'Tag',
    group: 'dataDisplay',
    label: '标签',
  },

  {
    screen: Tab,
    key: 'Tab',
    group: 'dataDisplay',
    label: '标签页',
  },

  {
    screen: Longlist,
    key: 'Longlist',
    group: 'dataDisplay',
    label: '长列表',
  },

  {
    screen: Topview,
    key: 'Topview',
    label: '顶层视图',
    group: 'feedback',
  },

  {
    screen: Modal,
    key: 'Modal',
    label: '基础弹窗',
    group: 'feedback',
  },

  {
    screen: Dialog,
    key: 'Dialog',
    label: '对话框',
    group: 'feedback',
  },

  {
    screen: Tip,
    key: 'Tip',
    label: '弹窗提示',
    group: 'feedback',
  },

  {
    screen: SlideModal,
    key: 'SlideModal',
    label: '滑动弹窗',
    group: 'feedback',
  },
  {
    screen: Actionsheet,
    key: 'Actionsheet',
    group: 'feedback',
    label: '行动面板',
  },

  {
    screen: BottomModal,
    key: 'BottomModal',
    label: '半页弹窗',
    group: 'feedback',
  },

  {
    screen: Popover,
    key: 'Popover',
    label: '弹出框',
    group: 'feedback',
  },

  {
    screen: Picker,
    key: 'Picker',
    label: '筛选',
    group: 'feedback',
  },

  {
    screen: Dropdown,
    key: 'Dropdown',
    label: '下拉菜单',
    group: 'navigation',
  },

  {
    screen: AnimationsScreen,
    key: 'AnimationsScreen',
    label: '动画',
    group: 'base',
  },

  {
    screen: TreeScreen,
    key: 'TreeScreen',
    label: '树形结构处理',
    group: 'base',
  },

  {
    screen: TreeView,
    key: 'TreeView',
    label: '树形结构展示',
    group: 'dataDisplay',
  },

  {
    screen: Ruler,
    key: 'Ruler',
    label: '刻度尺',
    group: 'other',
  },
  {
    screen: Demo1Screen,
    key: 'Demo1Screen',
    label: 'Buttons',
    title: 'Buttons',
    group: 'demo',
  },
  {
    screen: Demo2Screen,
    key: 'Demo2Screen',
    label: 'Form',
    title: '个人信息',
    group: 'demo',
  },

  {
    screen: Demo3Screen,
    key: 'Demo3Screen',
    label: 'Theme',
    title: 'Theme',
    group: 'demo',
  },

  {
    screen: Demo4Screen,
    key: 'Demo4Screen',
    label: 'Animated',
    title: 'Animated',
    group: 'demo',
  },
];
