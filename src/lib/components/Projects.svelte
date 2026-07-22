<script lang="ts">
  import { lang } from '$lib/stores/lang.svelte';
  import { i18n, type Lang } from '$lib/i18n';
  import { projectData, type Project } from '$lib/data/projects';
  import { showToast } from '$lib/stores/toast.svelte';
  import { onMount } from 'svelte';

  let currentLang = $state<Lang>('es');
  lang.subscribe(v => currentLang = v);

  const t = (path: string) => {
    let v: any = i18n[currentLang];
    for (const k of path.split('.')) { if (v) v = v[k]; else return ''; }
    return v || '';
  };

  let detailProject = $state<Project | null>(null);
  let clickCount = $state(0);
  let maximized = $state(true);
  let modalContentEl: HTMLDivElement | undefined = $state();

  const ghIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';

  const railwaySvg = '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.368 219.093A260.486 260.486 0 000 244.864h388.907a44.635 44.635 0 00-5.035-7.381c-66.475-85.888-102.25-78.443-153.387-80.64-17.066-.683-28.65-.982-96.533-.982-36.352 0-75.84.107-114.325.214-4.971 13.44-9.771 26.453-12.118 37.056h199.296v25.962H2.347h.021zm389.59 51.755H.213c.427 6.933 1.067 13.76 2.006 20.501h361.685c16.128 0 25.152-9.152 28.075-20.48l-.021-.02zM22.507 362.155S82.453 509.398 255.723 512c103.552 0 192.533-61.504 232.96-149.845H22.507z" fill="currentColor"/><path d="M255.723 0C160 0 76.65 52.587 32.66 130.304c34.368-.064 101.334-.107 101.334-.107h.021v-.02c79.147 0 82.09.34 97.557.98l9.6.363c33.323 1.11 74.326 4.693 106.582 29.099 17.493 13.226 42.773 42.453 57.856 63.253 13.93 19.243 17.92 41.387 8.448 62.592-8.704 19.477-27.456 31.104-50.176 31.104H8.32s2.133 8.96 5.29 18.88h485.334c8.619-25.92 12.992-53.035 13.014-80.341C512 114.667 397.29 0 255.744 0h-.021z" fill="currentColor"/></svg>';

const tagSvg: Record<string, string> = {
    React: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964zm-1.612 2.58h.01c-.01 0-.01 0-.01 0z"/></svg>',
    'Node.js': '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.184-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.238.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.019 1.615-1.339 2.531-3.67 2.531z"/></svg>',
    MongoDB: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>',
    HTML: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M2 2h20L19 20l-7 3-7-3L2 2zm14 5H7.6l.3 3.5h7.7l-.4 4.5L12 16.5 8.8 15l-.2-2.2H5.5l.3 4L12 19l6.2-2.2.8-9.8z"/></svg>',
    CSS: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M2 2h20L19 20l-7 3-7-3L2 2zm13.5-1.6L16.7 5H7.8l.2 2.5h8.8l-.5 5H8.9l.3 2.5h6.3l.4 3L12 17.5 8 16l-.3-2.5H5.5l.4 4.5L12 21l6.1-2 .9-10H7.4l-.3-2.5h11z"/></svg>',
    JavaScript: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.739 1.06c.21.48.45.689.75 1.034 1.605 1.755 6.435 1.395 6.675-1.105.09-.735.041-1.351-.465-1.954z"/></svg>',
    Lua: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M19.2 4.8C24 9.6 24 14.4 19.2 19.2S9.6 24 4.8 19.2 0 14.4 0 9.6 4.8 0 9.6 0s9.6 4.8 9.6 4.8zM8 6h2v8H8V6zm4 2h2v6h-2V8z"/></svg>',
    Shell: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h14v2H3v-2z"/></svg>',
    YAML: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 1.5V9h5.5L13 3.5z"/></svg>',
    Docker: '<svg width="10" height="10" viewBox="0 0 512 512" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M501.4 212.3c-11.5-8-38-11-58.6-7-2.4-20-13.5-37.5-32.7-53l-11-8-7.7 11.5c-9.6 15-14.4 36-13 56 .5 7 2.9 19.5 10.1 30.5-6.7 4-20.7 9-38.9 9H2.3l-1 4c-3.4 20-3.4 82.5 36 130.5 29.8 36.5 74 55 132.1 55 125.9 0 219.1-60.5 262.8-170 17.3.5 54.3 0 73-37.5.5-1 1.4-3 4.8-10.5l1.9-4zM280 71.3h-52.8v50H280zm0 60h-52.8v50H280zm-62.5 0h-52.8v50h52.8zm-62.4 0h-52.8v50h52.8zm-62.5 60H39.8v50h52.8zm62.5 0h-52.8v50h52.8zm62.4 0h-52.8v50h52.8zm62.5 0h-52.8v50H280zm62.4 0h-52.8v50h52.8z"/></svg>',
    Figma: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0zM12 0v8h4a4 4 0 0 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V4a4 4 0 0 0-8 0zM4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z"/></svg>',
    LazyVim: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M12 2l.9 3.3a7.5 7.5 0 015.8 5.8L22 12l-3.3.9a7.5 7.5 0 01-5.8 5.8L12 22l-.9-3.3a7.5 7.5 0 01-5.8-5.8L2 12l3.3-.9a7.5 7.5 0 015.8-5.8L12 2z"/></svg>',
    Neovim: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M2.214 4.954v13.615L7.655 24V10.314L3.312 3.845 2.214 4.954zm4.999 17.98l-4.557-4.548V5.136l.59-.596 3.967 5.908v12.485zm14.573-4.457l-.862.937-4.24-6.376V0l5.068 5.092.034 13.385zM7.431.001l12.998 19.835-3.637 3.637L3.787 3.683 7.43 0z"/></svg>',
    Python: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M7.358 8.515h4.312c.398 0 .726-.327.726-.729V.731c0-.399-.302-.716-.699-.731C11.231 0 10.6 0 10.6 0s.006 1.268-.009 1.268c-.018.432-.376.769-.812.769H7.377c-.411 0-.744-.347-.744-.746V.005S3.919 0 3.919 0c-.744 0-1.332.604-1.332 1.34v4.279c0 2.854 2.583 2.896 4.771 2.896zM9.818 3.141c-.333 0-.603-.273-.603-.607 0-.335.27-.607.603-.607.332 0 .602.272.602.607 0 .334-.27.607-.602.607zm-6.46 6.536c0 1.192 1.039 3.159 2.882 3.159h3.273v-1.447c0-.42.347-.76.767-.76h4.298c.416 0 .758.342.758.76v2.714c0 .823-.698 1.453-1.519 1.453H7.93c-2.177 0-4.236-1.21-4.236-3.521v-5.97S1.583 9.712 1.583 9.712c-.638.141-1.262.564-1.262 1.495v4.279c0 2.867 2.368 3.129 4.522 3.129h4.326v-1.433c0-1.939 1.388-2.298 2.889-2.298 1.332 0 4.445.132 4.445-2.995v-4.88c0-1.218-.745-2.931-2.648-2.931h-3.442v1.501c0 .399-.331.723-.73.723H5.58c-.5 0-.748.214-.748.635-.001.006-.001 2.24-.001 2.24s.477.168.527.168z"/></svg>',
    Tailwind: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 4c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 11.15 9.5 10 7 10z"/></svg>',
    PostgreSQL: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2007-.3346.2459-.4972.0469-.1689.072-.3509.0805-.5366.0086-.1857.0004-.3776-.0237-.569-.0477-.3783-.1535-.7208-.2918-1.047-.1384-.3262-.3054-.6383-.497-.9362l-.0098-.0154c-.0878-.1365-.181-.2694-.2789-.3976-.0979-.1282-.1987-.254-.3008-.3765-.204-.245-.414-.481-.6268-.708-.2126-.227-.4238-.447-.6292-.658m6.2303-8.8031c.1736-.1378.3538-.253.5355-.344.1817-.091.361-.155.5316-.19.1706-.036.327-.044.465-.028.138.016.254.063.347.128.046.032.085.07.116.113.031.043.054.09.069.139.03.098.035.204.015.306-.02.102-.06.195-.114.273-.109.156-.277.275-.475.354-.198.08-.409.119-.614.118-.205-.001-.391-.043-.546-.115-.155-.072-.27-.168-.341-.273a.471.471 0 0 1-.079-.152.435.435 0 0 1-.006-.15c.01-.05.032-.095.066-.133zm-3.1043 3.8575c.073-.1.155-.194.245-.28.09-.087.183-.166.278-.238.19-.144.38-.265.557-.36.177-.095.332-.161.462-.197.13-.036.226-.041.289-.016.063.025.09.067.091.137.001.07-.015.145-.048.233-.033.088-.082.179-.148.28-.132.202-.322.397-.545.557-.223.16-.456.27-.678.338-.222.067-.414.091-.565.071-.152-.02-.256-.078-.317-.158-.06-.08-.079-.193-.047-.332.032-.14.11-.299.234-.49zm-6.7057-12.13c-.043.025-.087.055-.13.089-.086.068-.168.148-.244.24-.151.182-.28.4-.386.64-.106.24-.179.497-.22.766-.04.269-.048.544-.023.82.025.276.075.546.152.811.077.265.183.517.318.756.135.239.3.457.49.654.19.197.399.372.624.527.225.155.46.292.7.415.24.123.476.232.705.332.229.1.44.192.628.282.188.09.34.176.455.258.115.082.184.163.208.252.024.089-.001.184-.074.295-.073.111-.19.224-.349.35-.16.126-.357.252-.594.378-.236.126-.504.249-.8.37-.296.12-.62.219-.966.298-.346.079-.71.13-1.089.154-.38.024-.76.017-1.14-.023-.38-.04-.75-.12-1.113-.24-.362-.12-.7-.298-1.011-.534-.31-.236-.585-.533-.823-.892-.238-.359-.434-.783-.587-1.27-.153-.488-.256-1.04-.31-1.655-.053-.616-.054-1.285 0-2.008.055-.723.155-1.488.302-2.296.147-.808.332-1.642.556-2.503.224-.861.476-1.73.756-2.608.28-.877.578-1.743.894-2.598.316-.855.637-1.682.963-2.482.326-.8.64-1.544.942-2.233.302-.689.58-1.305.833-1.849.253-.544.47-1.002.652-1.374.182-.372.32-.65.414-.835.094-.185.14-.276.14-.276s.918 2.073 2.251 5.405c1.333 3.332 2.84 7.16 4.523 11.483 1.682 4.323 3.374 8.786 5.074 13.389.181.492.346.993.493 1.503.148.51.275 1.019.381 1.528.106.509.186 1.008.24 1.498.055.49.082.963.082 1.418 0 .455-.032.883-.095 1.285-.063.402-.162.77-.296 1.105-.134.335-.31.63-.529.886-.219.256-.483.462-.794.62-.31.157-.671.257-1.083.3-.412.042-.872.019-1.38-.07-.509-.089-1.05-.264-1.623-.526-.573-.262-1.164-.611-1.773-1.047-.609-.436-1.22-.96-1.834-1.572.615-.828 1.108-1.603 1.48-2.325.371-.722.606-1.387.705-1.995.099-.608.065-1.16-.102-1.655-.167-.495-.452-.933-.855-1.314-.403-.381-.915-.7-1.536-.957-.621-.257-1.333-.45-2.136-.58-.803-.13-1.678-.193-2.625-.19-.947.004-1.944.064-2.99.18-1.045.116-2.11.282-3.193.5-1.083.217-2.158.474-3.225.77-1.067.296-2.094.62-3.08.973-.986.353-1.903.726-2.75 1.12z"/></svg>',
    TypeScript: '<svg width="10" height="10" viewBox="0 0 512 512" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M19.2 2.9h473.6c10.6 0 19.2 8.5 19.2 19v468.3c0 10.5-8.6 19-19.2 19H19.2c-10.6 0-19.2-8.5-19.2-19V21.9c0-10.5 8.6-19 19.2-19m265.4 269.3v-41.5H102.4v41.5h65.1v184.9h51.8V272.2zm20.7 180c8.4 4.2 18.2 7.4 29.6 9.5s23.4 3.2 36.1 3.2c12.3 0 24-1.2 35.1-3.5q16.65-3.45 29.1-11.4c8.4-5.3 15-12.3 19.8-20.8s7.3-19.2 7.3-31.8c0-9.2-1.4-17.2-4.2-24.1s-6.8-13-12-18.4q-7.8-8.1-18.9-14.4c-11.1-6.3-15.6-8.3-24.8-12.1-6.7-2.7-12.8-5.4-18.1-8-5.4-2.6-9.9-5.2-13.7-7.9-3.7-2.7-6.6-5.5-8.7-8.5-2-3-3.1-6.4-3.1-10.2 0-3.5.9-6.6 2.7-9.4s4.4-5.2 7.7-7.2 7.4-3.6 12.2-4.7 10.2-1.7 16.1-1.7c4.3 0 8.8.3 13.6.9s9.6 1.6 14.4 2.9 9.5 3 14.1 5q6.9 3 12.6 6.9v-47.2c-7.8-2.9-16.4-5.1-25.6-6.6-9.3-1.4-19.9-2.1-31.9-2.1-12.2 0-23.8 1.3-34.7 3.9s-20.5 6.6-28.8 12.1-14.9 12.4-19.7 20.9-7.2 18.6-7.2 30.4c0 15.1 4.4 27.9 13.3 38.5q13.2 15.9 40.2 27q10.65 4.2 19.8 8.4c6.1 2.7 11.4 5.6 15.8 8.5s8 6.2 10.5 9.6c2.6 3.5 3.9 7.4 3.9 11.8 0 3.3-.8 6.3-2.4 9.1s-4 5.2-7.3 7.3-7.3 3.7-12.2 4.8c-4.9 1.2-10.6 1.7-17.1 1.7-11.1 0-22.2-1.9-33.1-5.8-10.9-3.8-21-9.6-30.4-17.3z"/></svg>',
    Astro: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"/></svg>',
    Svelte: '<svg width="10" height="10" viewBox="0 0 256 307.66" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.2 82.2 0 0 0-37.135 55.056a86.57 86.57 0 0 0 8.536 55.576a82.4 82.4 0 0 0-12.296 30.719a87.6 87.6 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.18 82.18 0 0 0 37.135-55.057a86.6 86.6 0 0 0-8.53-55.577a82.4 82.4 0 0 0 12.29-30.718a87.57 87.57 0 0 0-14.963-66.244M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.7 52.7 0 0 1-9.003-39.85a50 50 0 0 1 1.713-6.693l1.35-4.115l3.671 2.697a92.5 92.5 0 0 0 28.036 14.007l2.663.808l-.245 2.659a16.07 16.07 0 0 0 2.89 10.656a17.14 17.14 0 0 0 18.397 6.828a15.8 15.8 0 0 0 4.403-1.935l71.67-45.672a14.92 14.92 0 0 0 6.734-9.977a15.92 15.92 0 0 0-2.713-12.011a17.16 17.16 0 0 0-18.404-6.832a15.8 15.8 0 0 0-4.396 1.933l-27.35 17.434a52.3 52.3 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.68 52.68 0 0 1-9.004-39.849a49.43 49.43 0 0 1 22.34-33.114l71.664-45.677a52.2 52.2 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.7 52.7 0 0 1 9.004 39.85a51 51 0 0 1-1.713 6.692l-1.35 4.116l-3.67-2.693a92.4 92.4 0 0 0-28.037-14.013l-2.664-.809l.246-2.658a16.1 16.1 0 0 0-2.89-10.656a17.14 17.14 0 0 0-18.398-6.828a15.8 15.8 0 0 0-4.402 1.935l-71.67 45.674a14.9 14.9 0 0 0-6.73 9.975a15.9 15.9 0 0 0 2.709 12.012a17.16 17.16 0 0 0 18.404 6.832a15.8 15.8 0 0 0 4.402-1.935l27.345-17.427a52.2 52.2 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.68 52.68 0 0 1 9.003 39.848a49.45 49.45 0 0 1-22.34 33.12l-71.664 45.673a52.2 52.2 0 0 1-14.563 6.398"/></svg>',
    Canvas: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:2px"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
    'Material UI': '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M7.525 1.5L.6 5.4v10.8l6.9 3.9 6.9-3.9V5.4l-6.9-3.9zm0 2.4l4.5 2.55v2.88l-4.05-2.28V6.56l-3.15 1.8V8.4l3.95 2.25-.82.46-3.13-1.77v2.06l3.95 2.2 4.2-2.37V12.6l-4.2 2.37-4.2-2.37v2.06l4.2 2.37 4.2-2.37v-3l-1.05-.6v1.77l-3.15 1.8-3.16-1.8V9.83l3.16 1.8.34-.2h.02l.69-.39V7.42l-4.5-2.52z"/></svg>',
    Railway: railwaySvg,
    VoltBuilder: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="M13 2L3 14h7l-2 8 11-12h-7l1-8z"/></svg>',
  };

  function badgeSvg(tag: string): string {
    return tagSvg[tag] || '';
  }

  const tagColors: Record<string, string> = {
    React: '#61dafb', 'Node.js': '#68a063', MongoDB: '#4db33d',
    HTML: '#e34f26', Tailwind: '#38bdf8', JavaScript: '#f7df1e',
    Lua: '#000080', Shell: '#4eaa25', YAML: '#cb171e', Python: '#3776ab',
    PostgreSQL: '#336791', Docker: '#0db7ed', Figma: '#f24e1e',
    LazyVim: '#6c5ce7', Neovim: '#57a143', CSS: '#1572b6',
    TypeScript: '#3178c6', Astro: '#ff5a03', Svelte: '#ff3e00',
    Canvas: '#e04e1f', 'Material UI': '#007fff', Railway: '#7E3AF2', VoltBuilder: '#7C3AED'
  };

  function colorfulTagStyle(tag: string) {
    const c = tagColors[tag] || '#888';
    return `color:${c};border-color:${c};background:${c}15`;
  }

  function openDetail(id: number) {
    clickCount = 0;
    maximized = true;
    const p = projectData.find(x => x.id === id);
    if (p) detailProject = p;
    document.dispatchEvent(new CustomEvent('detail-open'));
  }

  function closeDetail() {
    detailProject = null;
    maximized = true;
    document.dispatchEvent(new CustomEvent('detail-close'));
  }

  function toggleMaximize() {
    maximized = !maximized;
  }

  function scrollToTop() {
    modalContentEl?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!detailProject) return;
    if (e.key === 'Escape') closeDetail();
    if (e.key === 'F11') { e.preventDefault(); toggleMaximize(); }
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });

  function handleCardClick(id: number) {
    clickCount++;
    if (clickCount === 3) {
      showToast('? Tan indeciso como siempre...');
      clickCount = 0;
    }
  }

  function getDesc(p: Project) {
    if (currentLang === 'en') return p.descEn;
    if (currentLang === 'de') return p.descDe;
    return p.desc;
  }

  function getDetailDesc(p: Project) {
    if (currentLang === 'en') return p.detailDescEn;
    if (currentLang === 'de') return p.detailDescDe;
    return p.detailDesc;
  }

  let detailParagraphs = $derived(
    detailProject ? getDetailDesc(detailProject).split('\n\n').map(p => p.trim()).filter(Boolean) : []
  );

  function statusColor(p: Project) {
    const s = currentLang === 'en' ? p.statusEn : (currentLang === 'de' ? p.statusDe : p.status);
    return s === 'Completado' || s === 'Completed' || s === 'Abgeschlossen'
      ? 'var(--accent-tertiary)'
      : 'var(--accent-secondary)';
  }

  function statusLabel(p: Project) {
    if (currentLang === 'en') return p.statusEn;
    if (currentLang === 'de') return p.statusDe;
    return p.status;
  }

  function getCategory(p: Project) {
    if (currentLang === 'en') return p.categoryEn;
    if (currentLang === 'de') return p.categoryDe;
    return p.category;
  }

  function getTeamSize(p: Project) {
    if (currentLang === 'en') return p.teamSizeEn;
    if (currentLang === 'de') return p.teamSizeDe;
    return p.teamSize;
  }
</script>

<section class="section" id="projects">
  <div class="window">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>projects.sh</span>
    </div>
    <div class="window__content">
      <h2 class="section__title">// {t('sectionTitles.projects')}</h2>
      <div class="tiling-container" style="padding:0">
        {#each projectData as p}
          <div class="window card-window" data-project={p.id}
            onclick={() => handleCardClick(p.id)}
            role="presentation">
            <div class="window__titlebar">
              <div class="window__titlebar-dots">
                <span class="window__titlebar-dot window__titlebar-dot--close"></span>
                <span class="window__titlebar-dot"></span>
                <span class="window__titlebar-dot"></span>
              </div>
              <span>project_{String(p.id + 1).padStart(2, '0')}.json</span>
            </div>
            <div class="window__content">
              <h3 style="color:var(--accent-tertiary)">
                {p.title}
                {#if p.isPrivate}
                  <span class="tag">🔒 {t('projects.private')}</span>
                {/if}
              </h3>
              <p style="margin:var(--gap-sm) 0">
                {getDesc(p)}
              </p>
              <div style="display:flex;gap:var(--gap-xs);flex-wrap:wrap">
                {#each p.tags as tag}
                  <span class="tag">{@html badgeSvg(tag)}{tag}</span>
                {/each}
              </div>
              <div style="display:flex;gap:var(--gap-sm);margin-top:var(--gap-sm)">
                <button class="btn" style="flex:1" onclick={() => openDetail(p.id)}>
                  {t('projects.details')}
                </button>
                <a href={p.code} target="_blank" class="btn" style="flex:1;text-align:center">
                  {@html ghIcon} {t('projects.code')}
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Detail Overlay -->
{#if detailProject}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div class="modal-overlay active" class:maximized onclick={closeDetail} role="presentation">
    <div class="window modal-window" class:maximized
      style="overflow-y:auto;max-width:720px;max-height:90vh"
      bind:this={modalContentEl}
      onclick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true">
      <div class="window__titlebar">
        <div class="window__titlebar-dots">
          <span class="window__titlebar-dot window__titlebar-dot--close"></span>
          <span class="window__titlebar-dot"></span>
          <span class="window__titlebar-dot"></span>
        </div>
        <span>detail_{String(detailProject.id + 1).padStart(2, '0')}.sh</span>
        <div style="display:flex;gap:4px">
          <button class="modal-close-btn" onclick={toggleMaximize} aria-label="Maximize" title="F11">⛶</button>
          <button class="modal-close-btn" onclick={closeDetail} aria-label="Close" title="Esc">✕</button>
        </div>
      </div>
      <div class="window__content detail-content">
        <!-- Back to top button at the top -->
        <button class="detail-top-back" onclick={closeDetail}>
          ← {t('projects.back')}
        </button>

        <!-- Title -->
        <h2 class="detail-title">{detailProject.title}</h2>

        <!-- Short desc -->
        <p class="detail-desc">
          {getDesc(detailProject)}
        </p>

        <!-- Colorful SVG Badges -->
        <div class="detail-tags">
          {#each detailProject.tags as tag}
            <span class="detail-tag" style={colorfulTagStyle(tag)}>{@html badgeSvg(tag)}{tag}</span>
          {/each}
        </div>

        <!-- Action buttons -->
        <div class="detail-actions">
          <a href={detailProject.code} target="_blank" class="btn detail-action-btn">
            {@html ghIcon} {t('projects.code')}
          </a>
          {#if detailProject.live}
            <a href={detailProject.live} target="_blank" class="btn detail-action-btn btn--live">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/></svg>
              {t('projects.live')}
            </a>
          {/if}
        </div>

        <!-- Metadata grid -->
        <div class="detail-meta">
          <div class="meta-item">
            <span class="meta-label">{t('projects.status')}</span>
            <span class="meta-value" style="color:{statusColor(detailProject)}">
              ● {statusLabel(detailProject)}
            </span>
          </div>
          <div class="meta-item">
            <span class="meta-label">{t('projects.year')}</span>
            <span class="meta-value">{detailProject.year}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">{t('projects.category')}</span>
            <span class="meta-value">{getCategory(detailProject)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">{t('projects.team')}</span>
            <span class="meta-value">{getTeamSize(detailProject)}</span>
          </div>
        </div>

        <!-- Detailed description -->
        <div class="detail-body">
          {#each detailParagraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>

        <!-- Image if present -->
        {#if detailProject.image}
          <div class="detail-image-wrap">
            <img src={detailProject.image} alt={detailProject.title} class="detail-image" />
          </div>
        {/if}

        <!-- Footer credits -->
        <div class="detail-footer">
          2026 © {t('projects.footer')}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .card-window {
    cursor: pointer;
  }

  .detail-content h2.detail-title {
    color: var(--accent-secondary);
    font-size: 1.4rem;
    margin-bottom: var(--gap-sm);
  }

  .detail-desc {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: var(--gap-md);
    line-height: 1.6;
  }

  .detail-tags {
    display: flex;
    gap: var(--gap-xs);
    flex-wrap: wrap;
    margin-bottom: var(--gap-md);
  }

  .detail-tag {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid;
    transition: all 0.2s;
    line-height: 1.5;
  }

  .detail-tag:hover {
    transform: translateY(-1px);
    filter: brightness(1.2);
  }

  .detail-actions {
    display: flex;
    gap: var(--gap-sm);
    margin-bottom: var(--gap-lg);
  }

  .detail-action-btn {
    flex: 1;
    text-align: center;
  }

  .btn--live {
    background: var(--accent-secondary);
    color: #000;
    border-color: var(--accent-secondary);
  }

  .btn--live:hover {
    background: #7730b8;
    border-color: #7730b8;
    color: #fff;
    box-shadow: 0 0 16px #7730b8, 0 0 32px rgba(119,48,184,0.4);
    transform: translateY(-2px);
  }

  .detail-meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-md);
    padding: var(--gap-md);
    background: var(--bg-tertiary);
    border-radius: 6px;
    margin-bottom: var(--gap-lg);
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .meta-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-dim);
  }

  .meta-value {
    font-size: 0.9rem;
    color: var(--text-main);
    font-weight: 600;
  }

  .detail-body {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: var(--gap-lg);
    font-size: 0.9rem;
  }

  .detail-body :global(p) {
    margin-bottom: var(--gap-md);
    white-space: pre-line;
  }

  .detail-image-wrap {
    text-align: center;
    padding: var(--gap-sm);
    background: var(--bg-tertiary);
    border-radius: 6px;
    margin-bottom: var(--gap-lg);
    max-height: 300px;
    overflow: hidden;
  }

  .detail-image {
    max-width: 100%;
    max-height: 270px;
    object-fit: contain;
    border-radius: 4px;
  }

  .detail-footer {
    text-align: center;
    font-size: 0.75rem;
    color: var(--text-dim);
    padding-top: var(--gap-md);
    border-top: 1px solid var(--text-dim);
    opacity: 0.7;
    line-height: 1.5;
  }

  /* Back to top button at top of detail */
  .detail-top-back {
    background: transparent;
    border: none;
    color: var(--accent-tertiary);
    font-family: inherit;
    font-size: 0.85rem;
    cursor: pointer;
    padding: 0;
    margin-bottom: var(--gap-md);
    display: block;
    text-align: left;
    transition: opacity 0.2s;
  }

  .detail-top-back:hover {
    opacity: 0.7;
    text-decoration: underline;
  }

  /* Maximized state */
  :global(.modal-overlay.maximized) {
    align-items: flex-start;
    padding-top: var(--header-height, 36px);
  }

  .modal-window.maximized {
    width: 95vw !important;
    height: calc(95vh - var(--header-height, 36px) - 1rem) !important;
    max-width: none !important;
    max-height: none !important;
  }
</style>
