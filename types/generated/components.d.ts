import type { Schema, Struct } from '@strapi/strapi';

export interface ExplanationAudio extends Struct.ComponentSchema {
  collectionName: 'components_explanation_audio';
  info: {
    displayName: 'Audio';
    icon: 'headphone';
  };
  attributes: {
    audio: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExplanationCode extends Struct.ComponentSchema {
  collectionName: 'components_explanation_codes';
  info: {
    description: '';
    displayName: 'Code';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.Text & Schema.Attribute.Required;
    explanation: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
  };
}

export interface ExplanationText extends Struct.ComponentSchema {
  collectionName: 'components_explanation_texts';
  info: {
    displayName: 'Text';
    icon: 'filter';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
  };
}

export interface ExplanationTextImage extends Struct.ComponentSchema {
  collectionName: 'components_explanation_text_images';
  info: {
    description: '';
    displayName: 'TextImage';
    icon: 'picture';
  };
  attributes: {
    img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    orientation: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'leading'>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
  };
}

export interface ExplanationVideo extends Struct.ComponentSchema {
  collectionName: 'components_explanation_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'television';
  };
  attributes: {
    text: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    transcript: Schema.Attribute.Text;
    video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface TaskCode extends Struct.ComponentSchema {
  collectionName: 'components_task_codes';
  info: {
    description: '';
    displayName: 'Code';
  };
  attributes: {
    givenCode: Schema.Attribute.Text & Schema.Attribute.Required;
    points: Schema.Attribute.Integer;
    question: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    testToExecute: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface TaskFillTheGap extends Struct.ComponentSchema {
  collectionName: 'components_task_fill_the_gaps';
  info: {
    description: '';
    displayName: 'FillTheGap';
  };
  attributes: {
    gapTexts: Schema.Attribute.Relation<
      'oneToMany',
      'api::array-string-entry.array-string-entry'
    >;
    points: Schema.Attribute.Integer;
    question: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    solutionText: Schema.Attribute.Text & Schema.Attribute.Required;
    textSnippets: Schema.Attribute.Relation<
      'oneToMany',
      'api::array-string-entry.array-string-entry'
    >;
  };
}

export interface TaskFreeText extends Struct.ComponentSchema {
  collectionName: 'components_task_free_texts';
  info: {
    description: '';
    displayName: 'FreeText';
  };
  attributes: {
    answer: Schema.Attribute.String & Schema.Attribute.Required;
    points: Schema.Attribute.Integer;
    question: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
  };
}

export interface TaskMarkTheLines extends Struct.ComponentSchema {
  collectionName: 'components_task_mark_the_lines';
  info: {
    description: '';
    displayName: 'MarkTheLines';
  };
  attributes: {
    exampleCodePerLine: Schema.Attribute.Relation<
      'oneToMany',
      'api::array-string-entry.array-string-entry'
    >;
    points: Schema.Attribute.Integer;
    question: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    solutionLines: Schema.Attribute.Relation<
      'oneToMany',
      'api::array-int-entry.array-int-entry'
    >;
  };
}

export interface TaskMultipleChoice extends Struct.ComponentSchema {
  collectionName: 'components_task_multiple_choices';
  info: {
    description: '';
    displayName: 'MultipleChoice';
  };
  attributes: {
    correctAnswers: Schema.Attribute.Relation<
      'oneToMany',
      'api::array-string-entry.array-string-entry'
    >;
    points: Schema.Attribute.Integer;
    possibleAnswers: Schema.Attribute.Relation<
      'oneToMany',
      'api::array-string-entry.array-string-entry'
    >;
    question: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface TaskSingleChoice extends Struct.ComponentSchema {
  collectionName: 'components_task_single_choices';
  info: {
    description: '';
    displayName: 'SingleChoice';
  };
  attributes: {
    correctAnswer: Schema.Attribute.Relation<
      'oneToOne',
      'api::array-string-entry.array-string-entry'
    >;
    points: Schema.Attribute.Integer;
    possibleAnswers: Schema.Attribute.Relation<
      'oneToMany',
      'api::array-string-entry.array-string-entry'
    >;
    question: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
  };
}

export interface UtilsGroupRow extends Struct.ComponentSchema {
  collectionName: 'components_utils_group_rows';
  info: {
    displayName: 'GroupRow';
  };
  attributes: {
    columnEntries: Schema.Attribute.Relation<
      'oneToMany',
      'api::content.content'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'explanation.audio': ExplanationAudio;
      'explanation.code': ExplanationCode;
      'explanation.text': ExplanationText;
      'explanation.text-image': ExplanationTextImage;
      'explanation.video': ExplanationVideo;
      'task.code': TaskCode;
      'task.fill-the-gap': TaskFillTheGap;
      'task.free-text': TaskFreeText;
      'task.mark-the-lines': TaskMarkTheLines;
      'task.multiple-choice': TaskMultipleChoice;
      'task.single-choice': TaskSingleChoice;
      'utils.group-row': UtilsGroupRow;
    }
  }
}
