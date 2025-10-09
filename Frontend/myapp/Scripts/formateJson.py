import json

def txt_to_json_stream(input_file: str, output_file: str):
    with open(input_file, 'r', encoding='utf-8') as fin, \
         open(output_file, 'w', encoding='utf-8') as fout:

        fout.write("[\n")  # JSON 数组开始
        first = True

        for line in fin:
            word = line.strip()
            if not word:
                continue

            if not first:
                fout.write(",\n")  # 逗号换行分隔
            else:
                first = False

            # 写入格式化后的字符串，每个元素占一行并加缩进
            fout.write(f'    {json.dumps(word, ensure_ascii=False)}')

        fout.write("\n]\n")  # JSON 数组结束

    print(f"✅ 已完成流式 JSON 转换，输出到 {output_file}")


if __name__ == "__main__":
    # 示例：输入文件 input.txt，输出文件 output.json
    input_path = "./Oct08"
    output_path = "./output_Oct08"
    txt_to_json_stream(input_path, output_path)