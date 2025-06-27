'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  path: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '', path: '/' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '', path: '/hi' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '', path: '/te' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '', path: '/ta' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '', path: '/gu' },
];

interface LanguageSwitcherProps {
  position?: 'header' | 'footer' | 'floating';
  variant?: 'dropdown' | 'horizontal' | 'vertical';
  showFlags?: boolean;
  showNativeNames?: boolean;
}

export default function LanguageSwitcher({ 
  position = 'header',
  variant = 'dropdown',
  showFlags = false,
  showNativeNames = true 
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // 确定当前语言
  const currentLang = languages.find(lang => 
    pathname === lang.path || pathname.startsWith(lang.path + '/')
  ) || languages[0];

  const otherLanguages = languages.filter(lang => lang.code !== currentLang.code);

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${getPositionStyles(position)}`}>
        {/* 当前语言显示按钮 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Switch language"
          aria-expanded={isOpen}
        >
          {showFlags && <span className="text-lg">{currentLang.flag}</span>}
          <span className="font-medium text-gray-700">
            {showNativeNames ? currentLang.nativeName : currentLang.name}
          </span>
          <svg 
            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* 下拉菜单 */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="py-1">
              {otherLanguages.map((lang) => (
                <a
                  key={lang.code}
                  href={lang.path}
                  className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {showFlags && <span className="text-lg">{lang.flag}</span>}
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {showNativeNames ? lang.nativeName : lang.name}
                    </span>
                    {showNativeNames && lang.name !== lang.nativeName && (
                      <span className="text-xs text-gray-500">{lang.name}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 点击外部关闭 */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center space-x-2 ${getPositionStyles(position)}`}>
        {languages.map((lang) => (
          <a
            key={lang.code}
            href={lang.path}
            className={`flex items-center space-x-1 px-3 py-1.5 text-sm rounded-md transition-colors ${
              lang.code === currentLang.code
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
            title={lang.name}
          >
            {showFlags && <span className="text-base">{lang.flag}</span>}
            <span>{showNativeNames ? lang.nativeName : lang.code.toUpperCase()}</span>
          </a>
        ))}
      </div>
    );
  }

  return null;
}

function getPositionStyles(position: string): string {
  switch (position) {
    case 'floating':
      return 'fixed top-4 right-4 z-50';
    case 'footer':
      return 'justify-center';
    default:
      return '';
  }
}

// 简化版本 - 用于footer
export function FooterLanguageSwitcher() {
  return (
    <div className="text-center mt-8">
      <p className="text-sm text-gray-500 mb-4">Available in other languages:</p>
      <LanguageSwitcher 
        position="footer" 
        variant="horizontal" 
        showFlags={true}
        showNativeNames={true}
      />
    </div>
  );
}

// 悬浮版本 - 用于所有页面
export function FloatingLanguageSwitcher() {
  return (
    <LanguageSwitcher 
      position="floating" 
      variant="dropdown" 
      showFlags={false}
      showNativeNames={true}
    />
  );
}